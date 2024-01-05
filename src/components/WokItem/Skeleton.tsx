import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="225" y="305" rx="0" ry="0" width="9" height="0" />
    <rect x="232" y="305" rx="0" ry="0" width="19" height="0" />
    <rect x="0" y="279" rx="14" ry="14" width="280" height="36" />
    <rect x="0" y="337" rx="0" ry="0" width="280" height="102" />
    <rect x="0" y="458" rx="0" ry="0" width="90" height="33" />
    <rect x="115" y="452" rx="15" ry="15" width="153" height="41" />
  </ContentLoader>
);

export default Skeleton;
