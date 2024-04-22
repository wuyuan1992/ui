import { LevaPanel, useControls, useCreateStore } from 'leva';

export default ({
  defaultValue,
  children,
}: {
  defaultValue: any;
  children: any;
}) => {
  const store = useCreateStore();
  const value = useControls(defaultValue, { store });

  return (
    <div style={{ padding: '12px 16px' }}>
      {children(value)}
      <LevaPanel store={store} />
    </div>
  );
};
