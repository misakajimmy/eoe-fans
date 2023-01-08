import React from 'react';
import {Routes, Route, useLocation, } from 'react-router-native';
import {Novel, Picture, Setting, Video} from '../screens';



export function RootRouter() {
  let location = useLocation();

  return (
    <>
      <Routes>
        <Route path={'/'}>
          <Route index element={<Video/>}/>
          <Route path={'video'} element={<Video/>}/>
          <Route path={'picture'} element={<Picture/>}/>
          <Route path={'novel'} element={<Novel/>}/>
          <Route path={'setting'} element={<Setting/>}/>
        </Route>
      </Routes>
    </>

  );
}
