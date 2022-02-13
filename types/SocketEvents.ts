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
    MaxAudioBitrate = "max-audio-bitrate",
    RouterRtpCapabilities = "router-rtp-capabilities",
    CreateWebRtcTransport = "create-webrtc-transport"
}