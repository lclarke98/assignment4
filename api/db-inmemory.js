const user = {
    email: '',
    role: '',
  };
  
  module.exports.list = () => {
    return Object.keys(data);
  };

  module.exports.get = (id) => {
    if (data[id] == null) return '';
    return data[id];
  };
  
  module.exports.put = (id, val) => {
    data[id] = val;
  };