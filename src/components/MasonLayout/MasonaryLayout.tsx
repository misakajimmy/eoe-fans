import {HStack, VStack} from 'native-base';
import React from 'react';

export interface IMasonaryLayout {
  column: any,
  _hStack: any,
  _vStack: any,
  children: any,
}


export const MasonaryLayout = ({column, _hStack, _vStack, children}: IMasonaryLayout) => {
  const vStackChildren: any[] = [];
  const childrenLength = children.length;
  const columnLength = column.length;
  React.Children.map(children, (child, cIndex) => {
    // console.log(children);
    // console.log(cIndex);

    const pos = cIndex % columnLength;
    if (!vStackChildren[pos]) vStackChildren[pos] = [];
    // if (childrenLength - cIndex <= columnLength) {
    // 	vStackChildren[pos].push(React.cloneElement(child, { flex: 1 }));
    // } else {
    vStackChildren[pos].push(child);
    // }
  });

  const vstackTemplate = () => {
    if (vStackChildren.length !== 0) {
      return column.map((flexVal: any, index: number) => {
        vStackChildren[index][vStackChildren[index].length - 1] =
          React.cloneElement(
            vStackChildren[index][vStackChildren[index].length - 1],
            {flex: 1},
          );
        return (
          <VStack {..._vStack} flex={flexVal}>
            {vStackChildren[index]}
          </VStack>
        );
      });
    }
  };

  return <HStack {..._hStack}>
    {vstackTemplate()}
  </HStack>;
};
