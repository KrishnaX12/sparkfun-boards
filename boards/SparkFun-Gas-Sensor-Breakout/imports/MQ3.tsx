import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A2"],
  pin3: ["B1"],
  pin4: ["B2"],
  pin5: ["H1"],
  pin6: ["H2"],
} as const

export const MQ3 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C9900246606"] }}
    manufacturerPartNumber="MQ-3"
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbX="-3.35mm"
          pcbY="3.35mm"
          shape="circle"
          holeDiameter="1.016mm"
          outerDiameter="1.88mm"
        />
        <platedhole
          portHints={["pin2"]}
          pcbX="-3.35mm"
          pcbY="-3.35mm"
          shape="circle"
          holeDiameter="1.016mm"
          outerDiameter="1.88mm"
        />
        <platedhole
          portHints={["pin3"]}
          pcbX="3.35mm"
          pcbY="3.35mm"
          shape="circle"
          holeDiameter="1.016mm"
          outerDiameter="1.88mm"
        />
        <platedhole
          portHints={["pin4"]}
          pcbX="3.35mm"
          pcbY="-3.35mm"
          shape="circle"
          holeDiameter="1.016mm"
          outerDiameter="1.88mm"
        />
        <platedhole
          portHints={["pin5"]}
          pcbX="-4.75mm"
          pcbY="0mm"
          shape="circle"
          holeDiameter="1.016mm"
          outerDiameter="1.88mm"
        />
        <platedhole
          portHints={["pin6"]}
          pcbX="4.75mm"
          pcbY="0mm"
          shape="circle"
          holeDiameter="1.016mm"
          outerDiameter="1.88mm"
        />
        <silkscreencircle center={{ x: 0, y: 0 }} radius="8.4mm" />
        <silkscreencircle center={{ x: 0, y: 0 }} radius="1.4mm" />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
