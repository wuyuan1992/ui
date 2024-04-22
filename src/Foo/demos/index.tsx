import Storybook from '@/Storybook';
import { useMemo } from 'react';
import Foo from '..';

export default () => {
  const defaultValue = useMemo(
    () => ({
      subTitle: 'subTitle',
    }),
    [],
  );

  return (
    <Storybook defaultValue={defaultValue}>
      {(value: any) => <Foo {...value} />}
    </Storybook>
  );
};
