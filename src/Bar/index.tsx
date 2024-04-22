import { type FC } from 'react';

interface Props {
  title: string;
}

const Bar: FC<Props> = (props) => <h4>{props.title}</h4>;

export default Bar;
