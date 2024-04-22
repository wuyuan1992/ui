import Storybook from '@/Storybook';
import { useMemo } from 'react';
import Bar from '..';

export default () => {
  const defaultValue = useMemo(
    () => ({
      title: 'title',
    }),
    [],
  );

  return (
    <Storybook defaultValue={defaultValue}>
      {(value: any) => <Bar {...value} />}
    </Storybook>
  );
};
