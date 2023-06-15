import React, { useState } from 'react';
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';

const useCallStates = () => {
  const randomRoomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: '',
    style: 'capital',
  });

  const [stream, setStream] = useState(undefined);
  const [me, setMe] = useState('');
  const [call, setCall] = useState({
    isRecievedCall: false,
    from: '',
    name: '',
    isVideo: true,
  });
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [roomName, setRoomName] = useState(randomRoomName);
  const [name, setName] = useState(localStorage.getItem('userName') || '');
  const [isAudio, setIsAudio] = useState(true);
  const [isVideo, setIsVideo] = useState(true);
  const [isCallerMuted, setIsCallerMuted] = useState(false);

  return {
    stream,
    setStream,
    me,
    setMe,
    call,
    setCall,
    joinedRoom,
    setJoinedRoom,
    callEnded,
    setCallEnded,
    roomName,
    setRoomName,
    name,
    setName,
    isAudio,
    setIsAudio,
    isVideo,
    setIsVideo,
    isCallerMuted,
    setIsCallerMuted,
  };
};

export default useCallStates;
