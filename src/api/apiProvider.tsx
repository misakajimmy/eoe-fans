import React from 'react';
import {Api, ApiContext, ApiContextType} from './api';

export interface IApiProviderProps {
  children: React.ReactNode;
}

export const ApiProvider: React.FC<IApiProviderProps> = ({children}) => {
  const requestVideo = async (data: Api.Video.Data): Promise<Api.Video.Response | undefined> => {
    let url = Api.Video.Request.url;
    if (data) {
      let paramsArray: string[] = [];
      //拼接参数
      // @ts-ignore
      Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key].toString()))
      paramsArray.push('subscription-key=' + Api.KEY)
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&')
      } else {
        url += '&' + paramsArray.join('&')
      }
    }
    const res = await fetch(
      url, {
        method: Api.Video.Request.method,
        mode: 'cors',
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'ocp-apim-subscription-key': Api.KEY,
        }
      }
    );
    console.log( await res.json());
    if (!!res) {
      return await res.json();
    }
    return undefined;
  };
  const value: ApiContextType = {
    requestVideo
  };
  return <ApiContext.Provider value={value}>
    {children}
  </ApiContext.Provider>;
};
