import type { FC } from 'react';
import { memo } from 'react';
import { Suspense, lazy } from "react";

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { DeviceType, GetDeviceType } from '../../foundation/GetDeviceType';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};

const ProductListSlider = lazy(() =>
  import('../ProductListSlider').then(({ ProductListSlider }) => ({ default: ProductListSlider }))
)
const ProductGridList = lazy(() =>
  import('../ProductGridList').then(({ ProductGridList }) => ({ default: ProductGridList }))
)

export const ProductList: FC<Props> = memo(({ featureSection }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GetDeviceType>
        {({ deviceType }) => {
          switch (deviceType) {
            case DeviceType.DESKTOP: {
              return <ProductListSlider featureSection={featureSection} />;
            }
            case DeviceType.MOBILE: {
              return <ProductGridList featureSection={featureSection} />;
            }
          }
        }}
      </GetDeviceType>
    </Suspense>
  );
});

ProductList.displayName = 'ProductList';
