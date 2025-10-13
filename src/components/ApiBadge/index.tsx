import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ApiBadgeProps {
  type: 'get' | 'post' | 'put' | 'delete' | 'beta';
}

const ApiBadge: React.FC<ApiBadgeProps> = ({ type }) => {
  return (
    <span className={clsx(styles.apiBadge, styles[type])}>
      {type.toUpperCase()}
    </span>
  );
};

export default ApiBadge;