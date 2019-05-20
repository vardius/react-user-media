import React, { ComponentType, Ref } from 'react';
import useUserMediaFromContext from './useUserMediaFromContext';
import { UserMedia } from './useUserMedia';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Diff<T, K> = Omit<T, keyof K>;

interface InjectedProps {
  userMedia: UserMedia;
  ref?: Ref<HTMLElement>;
}

export default function withUserMedia<BaseProps extends InjectedProps>(WrappedComponent: ComponentType<BaseProps>) {
  type HocProps = Diff<BaseProps, InjectedProps> & {
    forwardedRef?: Ref<HTMLElement>;
  };

  function Hoc(props: HocProps) {
    const userMedia = useUserMediaFromContext();
    const { forwardedRef, ...rest } = props;

    return <WrappedComponent {...rest as BaseProps} ref={forwardedRef} userMedia={userMedia} />;
  }

  Hoc.displayName = `withUserMedia(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return React.forwardRef((props: HocProps, ref) => {
    return <Hoc {...props} forwardedRef={ref} />;
  });
};
