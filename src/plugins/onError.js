import {
  message
} from 'antd';

export default {
  onError(err, dispatch) {
    err.preventDefault();
    message.error(err.message);
  },
};
