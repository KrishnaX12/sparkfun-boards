import { sel } from "tscircuit"
import { MQ3 } from "./imports/MQ3"

const circleOutline = Array.from({ length: 64 }, (_, i) => {
  const theta = (2 * Math.PI * i) / 64

  return {
    x: Number((8.4 * Math.cos(theta)).toFixed(4)),
    y: Number((8.4 * Math.sin(theta)).toFixed(4)),
  }
})

export default () => (
  <board outline={circleOutline}>
    <schematictext
      text="H1 = Heater VCC @ 5V"
      schX={0}
      schY={2.3}
      anchor="center"
      color="red"
      fontSize={0.22}
    />
    <MQ3
      name="U1"
      displayName="GAS_SENSOR"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      schWidth={1.9}
      schHeight={1}
      schPinArrangement={{
        leftSide: ["pin1", "pin5"],
        rightSide: ["pin3", "pin6"],
      }}
      connections={{
        pin1: sel.U2.pin2,
        pin5: sel.U2.pin1,
        pin3: sel.U3.pin1,
        pin6: sel.U3.pin2,
      }}
    />
    <jumper
      name="U2"
      displayName="M02NG"
      footprint="pinrow2_p2.54_id1.016_od1.88_nosquareplating_nopinlabels"
      pcbX={0}
      pcbY={6.35}
      schX={-3}
      schY={0}
      schWidth={0.8}
      schHeight={1}
      pinLabels={{
        pin1: "H1",
        pin2: "A1",
      }}
      schPinArrangement={{
        rightSide: ["pin2", "pin1"],
      }}
    />
    <jumper
      name="U3"
      displayName="M02NG"
      footprint="pinrow2_p2.54_id1.016_od1.88_nosquareplating_nopinlabels"
      pcbX={0}
      pcbY={-6.35}
      schX={3}
      schY={0}
      schWidth={0.8}
      schHeight={1}
      pinLabels={{
        pin1: "B1",
        pin2: "GND",
      }}
      schPinArrangement={{
        leftSide: ["pin1", "pin2"],
      }}
    />
  </board>
)
