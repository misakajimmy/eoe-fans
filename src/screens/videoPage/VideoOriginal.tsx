import {Box, ScrollView} from 'native-base';
import {VideoSelectTag} from './VideoSelectTag';

export function VideoOriginal() {
  return <ScrollView
    pt={4}
  >
    <VideoSelectTag/>
  </ScrollView>;
}
