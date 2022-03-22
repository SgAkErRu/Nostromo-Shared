import { VideoCodec } from "./RoomTypes";

export type NewRoomInfo = {
    name: string,
    pass: string,
    videoCodec: VideoCodec;
};

export type RoomLinkInfo = {
    id: string,
    name: string;
};

/**
 * Информация о блокировки пользователя.
 * Это не окончательный вариант данной структуры.
 * */
export type UserBanInfo = {
    ip: string;
};