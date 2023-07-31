import { Button, Space } from 'antd';
import Cron, { CronFns } from 'qnn-react-cron';
import { FC, useRef, useState } from 'react';

const CronComponent: FC<Partial<Cron.CronProps>> = Cron as any;

export default function Content() {
  const [cronValue, setCronValue] = useState('');
  const fnRef = useRef<CronFns>();

  return (
    <div>
      {cronValue}
      <CronComponent
        getCronFns={(data) => (fnRef.current = data)}
        footer={
          <Space>
            <Button type="primary" onClick={() => setCronValue(fnRef.current?.getValue() ?? '')}>
              生成
            </Button>
          </Space>
        }
        onOk={setCronValue}
        value={cronValue}
      />
    </div>
  );
}
