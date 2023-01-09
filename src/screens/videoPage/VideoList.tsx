import {Box, ScrollView, useBreakpointValue} from 'native-base';
import {MasonaryLayout} from '../../components/MasonLayout';
import {VideoItem} from './VideoItem';
import {Api, useApi} from '../../api';
import {useEffect, useState} from 'react';
import IVideo = Api.Video.IVideo;
import {MemberEnums, Members} from '../../types';

export interface IVideoListProps {
  member?: MemberEnums;
}

export function VideoList(props: IVideoListProps) {
  const {requestVideo} = useApi();
  const {member} = props;
  const [videos, setVideos] = useState<IVideo[]>([]);
  const getVideo = async () => {
    const data: Api.Video.Data = {
      order: 'pubdate',
      page: 0
    };
    if (member!==undefined) {
      const q = 'tag.'+ Members[member].FirstName;
      data.q = q;
    }
    const video = await requestVideo(data);
    if (!!video) {
      console.log(video.result);
      setVideos(video.result);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  useEffect(()=>{
    getVideo();
  }, [member]);

  return (
    <Box
      position={'relative'}
      pt={2}
    >
      <ScrollView
        pl={2}
        pr={2}
      >
        <MasonaryLayout
          column={useBreakpointValue({
            base: [1, 1],
            sm: [1, 1],
            md: [1, 1, 1],
            lg: [1, 1, 1, 1],
            xl: [1, 1, 1, 1, 1],
          })}
          _hStack={{
            space: 1,
            mb: 2,
          }}
          _vStack={{
            space: 1,
            backgroundColor: 'white'
          }}
        >
          {
            videos.map(video => {
              return (
                <VideoItem key={video.bvid} video={video}/>
              );
            })
          }
        </MasonaryLayout>
      </ScrollView>
    </Box>
  );
}
