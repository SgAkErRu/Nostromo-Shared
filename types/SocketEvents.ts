export const enum SocketEvents
{
    RoomList = "room-list",
    RoomName = "room-name",
    UserList = "user-list",
    SubscribeUserList = "subscribe-user-list",
    UnsubscribeUserList = "unsubscribe-user-list",
    AdminAuth = "admin-auth",
    Result = "result",
    DeleteRoom = "delete-room",
    CreateRoom = "create-room",
    JoinRoom = "join-room",
    RoomDeleted = "room-deleted",
    RoomCreated = "room-created",
    RoomNameChanged = "room-name-changed",
    MaxAudioBitrate = "max-audio-bitrate",
    MaxVideoBitrate = "max-video-bitrate",
    RouterRtpCapabilities = "router-rtp-capabilities",
    CreateWebRtcTransport = "create-webrtc-transport",
    CloseTransport = "close-transport",
    CreateConsumerTransport = "create-consumer-transport",
    CreateProducerTransport = "create-producer-transport",
    ConnectWebRtcTransport = "connect-webrtc-transport",
    Ready = "ready",
    NewUser = "new-user",
    CloseConsumer = "close-consumer",
    PauseConsumer = "pause-consumer",
    ResumeConsumer = "resume-consumer",
    NewConsumer = "new-consumer",
    NewProducer = "new-producer",
    CloseProducer = "close-producer",
    PauseProducer = "pause-producer",
    ResumeProducer = "resume-producer",
    NewUsername = "new-username",
    ChatMsg = "chat-msg",
    ChatFile = "chat-file",
    Disconnect = "disconnect",
    UserDisconnected = "user-disconnected",
    NewMaxVideoBitrate = "new-max-video-bitrate",
    KickUser = "kick-user",
    BanUser = "ban-user",
    BanUserByIp = "ban-user-by-ip",
    UnbanUserByIp = "unban-user-by-ip",
    Redirect = "redirect",
    StopUserVideo = "stop-user-video",
    StopUserAudio = "stop-user-audio",
    ChangeUsername = "change-username",
    ChangeRoomName = "change-room-name",
    ChangeRoomPass = "change-room-pass",
    UserId = "user-id",
    Username = "username"
}