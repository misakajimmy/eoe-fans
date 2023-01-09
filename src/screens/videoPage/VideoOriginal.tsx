import {Box, ScrollView} from 'native-base';
import {VideoSelectTag} from './VideoSelectTag';
import {VideoList} from './VideoList';
import React, {useState} from 'react';
import {MemberEnums} from '../../types';

export function VideoOriginal() {
  const [selected, setSelected] = useState<MemberEnums | undefined>();

  return <ScrollView
    pt={4}
    backgroundColor={'warmGray.100'}
  >
    <VideoSelectTag
      onChange={(s) => {
        setSelected(s);
      }}
    />
    <VideoList member={selected}/>
  </ScrollView>;
}
