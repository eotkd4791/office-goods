import { FC, useEffect } from 'react';
import useUIStore from 'renderer/store/ui';

const Toast: FC = () => {
  const { alert, toggleAlert } = useUIStore();

  useEffect(() => {
    setTimeout(() => {
      toggleAlert();
    }, 2000);
  }, []);

  return (
    <div className="toast toast-top toast-end top-16">
      <div className={`alert alert-${alert.type}`}>
        <div>
          <span>{alert.message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
