const handleColorBackground = () => {
  const list = [
    'linear-gradient(to right, #c1f, #70e)',
    'linear-gradient(to bottom, #fa0, #f20)',
    'linear-gradient(to bottom, #fd0, #f90)',
  ];
  const indexRandom = Math.floor(Math.random() * list.length);
  return list[indexRandom];
};

export default handleColorBackground;
