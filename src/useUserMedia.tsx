import { useState, useEffect } from 'react';

export interface UserMedia {
  stream?: MediaStream | null;
  error?: MediaStreamError | null,
}

function useUserMedia(constraints: MediaStreamConstraints = { audio: true, video: true }): UserMedia {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<MediaStreamError | null>(null);

  useEffect(() => {
    if (stream) return;

    let didCancel = false;

    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (!didCancel) {
          setStream(stream);
        }
      } catch (err) {
        if (!didCancel) {
          setError(err);
        }
      }
    }

    const cancel = () => {
      didCancel = true;

      if (!stream) return;

      if ((stream as MediaStream).getVideoTracks) {
        (stream as MediaStream).getVideoTracks().map(track => track.stop());
      }

      if ((stream as MediaStream).getAudioTracks) {
        (stream as MediaStream).getAudioTracks().map(track => track.stop());
      }

      if ((stream as MediaStream).stop) {
        (stream as MediaStream).stop();
      }
    }

    getUserMedia();

    return cancel;
  }, [constraints, stream, error]);

  return {
    stream,
    error,
  };
}

export default useUserMedia;
