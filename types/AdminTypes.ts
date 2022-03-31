import { VideoCodec } from "./RoomTypes";

export interface NewRoomInfo
{
    name: string;
    password: string;
    videoCodec: VideoCodec;
};

export interface UpdateRoomInfo
{
    id: string;
    name?: string;
    password?: string;
}

export interface NewRoomNameInfo
{
    id: string;
    name: string;
};

export interface NewRoomPassInfo
{
    id: string;
    password: string;
};

export interface ActionOnUserInfo
{
    roomId: string;
    userId: string;
}

export interface ChangeUserNameInfo
{
    roomId: string;
    userId: string;
    username: string;
}

/**
 * Информация о блокировке пользователя.
 * Это не окончательный вариант данной структуры.
 * */
export interface UserBanInfo
{
    ip: string;
};