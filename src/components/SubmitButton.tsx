import React, { PropsWithChildren } from 'react';
import { Button, ButtonProps } from 'react-native-paper';

const SubmitButtonComponent = ({
  children,
  ...props
}: PropsWithChildren & ButtonProps) => {
  return (
    <Button
      contentStyle={{ backgroundColor: '#FF8B20', height: 50 }}
      labelStyle={{ color: '#fff', fontSize: 19, fontWeight: 'bold' }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButtonComponent;
