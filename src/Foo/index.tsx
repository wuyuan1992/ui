import { type FC } from 'react';

interface Props {
  subTitle: string;
}

const Foo: FC<Props> = (props) => <h4>{props.subTitle}</h4>;

export default Foo;
