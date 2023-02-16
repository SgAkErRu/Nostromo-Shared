import { types as MediasoupTypes } from "mediasoup-client";

/** Публичная информация о комнате. */
export interface PublicRoomInfo
{
    id: string;
    name: string;
    videoCodec: VideoCodec;
};

/** Информация о комнате. */
export interface RoomInfo extends PublicRoomInfo
{
    hashPassword: string;
    saveChatPolicy: boolean;
    symmetricMode: boolean;
}

/** Информация о пользователе. */
export type UserInfo = {
    id: string,
    name: string;
};

/** Информация о пользователе, который готов начать обмениваться медиапотоками. */
export type UserReadyInfo = {
    rtpCapabilities: MediasoupTypes.RtpCapabilities;
};

/** Информация о новом транспортном канале. */
export type NewWebRtcTransportInfo = {
    id: string,
    iceParameters: MediasoupTypes.IceParameters,
    iceCandidates: MediasoupTypes.IceCandidate[],
    dtlsParameters: MediasoupTypes.DtlsParameters;
};

/** Информация о подключаемом транспортном канале. */
export type ConnectWebRtcTransportInfo = {
    transportId: string,
    dtlsParameters: MediasoupTypes.DtlsParameters;
};

/** Информация о новом потоке-производителе. */
export type NewProducerInfo = {
    transportId: string;
    kind: MediasoupTypes.MediaKind;
    rtpParameters: MediasoupTypes.RtpParameters;
    streamId: string;
};

/** Информация о новом потоке-потребителе. */
export type NewConsumerInfo = {
    id: string;
    producerId: string;
    kind: MediasoupTypes.MediaKind;
    rtpParameters: MediasoupTypes.RtpParameters;
    producerUserId: string;
    streamId: string;
};

/** Информация о сообщении в чате. */
export interface ChatMessage
{
    userId: string;
    type: "text" | "file";
    datetime: number;
    content: string | ChatFileInfo;
}

/** Информация о файле в чате. */
export interface ChatFileInfo
{
    fileId: string;
    name: string;
    size: number;
};

/** Видеокодек. */
export const enum VideoCodec
{
    VP9 = 'VP9',
    VP8 = 'VP8',
    H264 = 'H264'
}

export const enum PrefixConstants
{
    KILO = 1024,
    MEGA = 1024 * 1024,
    GIGA = 1024 * 1024 * 1024
}