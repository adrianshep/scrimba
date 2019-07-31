package main

import "fmt"

type car struct {
  // uint16 can have min value 0 max value 65535
  // u, unsigned, starts at 0 and goes up
  gas_pedal uint16
  brake_pedal uint16
  // -32k to +32k:
  steering_wheel int16
  top_speed_kmh float64
}

func main() {
  // a_car := car is same as var a_car car
  a_car := car{gas_pedal: 22341,
              brake_pedal: 0,
              steering_wheel: 12561,
              top_speed_kmh: 225.0}
  // can also do:
  // a_car := car{22341,0,12562,225.0}

  fmt.Println(a_car.gas_pedal)
}
