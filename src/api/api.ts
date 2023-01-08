import React from 'react';

export interface ApiContextType {
  requestVideo: (data: Api.Video.Data) => Promise<Api.Video.Response | undefined>;
}

export const ApiContext = React.createContext<ApiContextType>(null!);

export namespace Api {
  export const BASE_URL = 'https://api.eoe.best/eoefans-api/v1';
  export const KEY = '7e013c02952c41078c18ab26f639f02e';

  export type ApiTypes = keyof typeof Apis;

  export const Apis = {
    video: Video
  }


  export interface IRequest {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  }

  export interface IResponse {
    code: IResponseCode,
    message: string,
    ttl: number,
  }

  export enum IResponseCode {
    OK = 0,
    ParamError = 400,
    NeedLogin,
  }


  export namespace Video {
    export const Request: IRequest = {
      url: BASE_URL + '/video-interface/advanced-search',
      method: 'GET'
    };

    export interface Data {
      /*
        排序方式，三种可选值pubdate、view、score，即数据库列名。
        pubdate为最新发布排序，
        view为最多播放排序，
        score为最高得分排序
       */
      order: 'pubdate' | 'view' | 'score';
      /*
        分页，每页返回20个；从1开始，自然数递增
       */
      page: number;
      /*
        q高级搜索语句，详细看API文档
        https://portal.eoe.api.vtb.link/api-details_get-video
       */
      q?: string;
      /*
        1表示为原创视频，2表示为转载视频
       */
      copyright?: 1 | 2;
      /*
        animation表示数据库中tid为1, 24, 25, 47, 210, 86, 27的视频；
        music表示tid为3, 28, 31, 30, 194, 59, 193, 29, 130的视频；
        dance表示tid为20, 198, 199, 200, 154, 156的视频；
        game表示tid为4, 17, 171, 172, 65, 173, 121, 136, 19的视频；
        live表示tid为160, 138, 239, 161, 162, 21的视频；
        delicacy表示tid为211, 76, 212, 213, 214, 215的视频；
        guichu表示tid为119, 22, 26, 126, 216, 127的视频；
        others表示tid为其他的视频
       */
      tname?: 'animation' | 'music' | 'dance' | 'game' | 'live' | 'delicacy' | 'guichu' | 'other'
    }

    export interface Response extends IResponse {
      data: {
        page: number,
        numResults: number,
        result: IVideo[]
      }
    }

    export interface IVideo {
      bvid: string;
      aid: number,
      name: string,
      mid: number,
      face: string,
      tid: number,
      tname: string,
      copyright: 1 | 2,
      title: string,
      desc: string;
      pic: string,
      tag: string,
      pubdate: number,
      duration: string,
      view: number,
      danmaku: number,
      reply: number,
      favorite: number,
      coin: number,
      share: number,
      like: number,
      score: number,
      status: number,
      created_at: number,
      updated_at: number
    }
  }
}

export function useApi() {
  return React.useContext(ApiContext);
}
