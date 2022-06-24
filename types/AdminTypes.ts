import { VideoCodec } from "./RoomTypes";

export interface NewRoomInfo
{
    name: string;
    password: string;
    videoCodec: VideoCodec;
    saveChatPolicy: boolean;
    symmetricMode: boolean;
};

export interface UpdateRoomInfo
{
    id: string;
    name?: string;
    password?: string;
    saveChatPolicy?: boolean;
    symmetricMode?: boolean;
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

export interface NewRoomSaveChatPolicyInfo
{
    id: string;
    saveChatPolicy: boolean;
};

export interface NewRoomModeInfo
{
    id: string;
    symmetricMode: boolean;
}

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