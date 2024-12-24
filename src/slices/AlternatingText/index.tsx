"use client"

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { asText } from "@prismicio/client";
import { View } from "@react-three/drei";
import { Scene } from "./Scene";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import clsx from "clsx";

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {

  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="grid z-[100] relative">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>
          {slice.primary.textgroup.map((item, index) => (
            <div key={asText(item.heading)} className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
              <div className={clsx(index % 2 == 0 ? "col-start-1" : "md:col-start-2", "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30")}>
                <h2 className="text-balance text-6xl font-bold">
                  {item.heading?.map(item => item.text)}
                </h2>
                <div className="mt-4 text-xl">
                  <PrismicRichText field={item.body} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
