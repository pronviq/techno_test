import "./Container.css";

interface ContainerProps {
  children: any;
  height: number;
  width: number;
}

const Container = ({ children, width = 250, height = 150 }: ContainerProps) => {
  return (
    <div className="container">
      <div className="container-title">{`Контейнер ${width}x${height}px`}</div>
      <div style={{ width: width + "px", height: height + "px" }} className="container-content">
        {children}
      </div>
    </div>
  );
};

export default Container;
