import { types as MediasoupTypes } from "mediasoup-client";

export type UserInfo = {
    id: string,
    name: string;
};

export type JoinInfo = {
    name: string,
    rtpCapabilities: MediasoupTypes.RtpCapabilities;
};

export type NewWebRtcTransportInfo = {
    id: string,
    iceParameters: MediasoupTypes.IceParameters,
    iceCandidates: MediasoupTypes.IceCandidate[],
    dtlsParameters: MediasoupTypes.DtlsParameters;
};

export type ConnectWebRtcTransportInfo = {
    transportId: string,
    dtlsParameters: MediasoupTypes.DtlsParameters;
};

export type NewProducerInfo = {
    transportId: string,
    kind: MediasoupTypes.MediaKind,
    rtpParameters: MediasoupTypes.RtpParameters
};

export type NewConsumerInfo = {
    producerUserId: string,
    id: string,
    producerId: string,
    kind: MediasoupTypes.MediaKind,
    rtpParameters: MediasoupTypes.RtpParameters
};

export type CloseConsumerInfo = {
    consumerId: string,
    producerUserId: string
};

export type ChatMsgInfo = {
    name: string,
    msg: string
}

export type ChatFileInfo = {
    username: string,
    fileId: string,
    filename: string,
    size: number
}

export const enum VideoCodec
{
    VP9 = 'VP9',
    VP8 = 'VP8',
    H264 = 'H264'
}