module Components::GatesHelper
  # Returns a partial of the hadamard gate.
  #
  #   # Add a label on top of the gate (default - nil)
  #   hadamard_gate(label: 'if alice_h')
  #
  #   # Disable the gate (default - false)
  #   hadamard_gate(disabled: true)
  #
  #   # Activate the wire (default - true)
  #   hadamard_gate(wire_active: false)
  def hadamard_gate(*options)
    render 'components/gates/hadamard_gate', *options
  end

  # Returns a partial of the not gate.
  #
  #   # Add a label on top of the gate (default - nil)
  #   not_gate(label: 'if alice_h')
  #
  #   # Disable the gate (default - false)
  #   not_gate(disabled: true)
  #
  #   # Activate the wire (default - true)
  #   not_gate(wire_active: false)
  #
  #   # Connect with upper gate (default - false)
  #   not_gate(top: true)
  #
  #   # Connect with lower gate (default - false)
  #   not_gate(bottom: true)
  def not_gate(*options)
    render 'components/gates/not_gate', *options
  end

  # Returns a partial of the phase gate.
  #
  #   # Specify θ
  #   phase_gate(theta: 'π/2')
  #
  #   # Disable the gate (default - false)
  #   phase_gate(theta: 'π/2', disabled: true)
  #
  #   # Activate the wire (default - true)
  #   phase_gate(theta: 'π/2', wire_active: false)
  #
  #   # Connect with upper gate (default - false)
  #   phase_gate(theta: 'π/2', top: true)
  #
  #   # Connect with lower gate (default - false)
  #   phase_gate(theta: 'π/2', bottom: true)
  def phase_gate(*options)
    render 'components/gates/phase_gate', *options
  end

  # Returns a partial of the root-not gate.
  #
  #   # Add a label on top of the gate (default - nil)
  #   root_not_gate(label: 'root-of-not')
  #
  #   # Disable the gate (default - false)
  #   root_not_gate(disabled: true)
  #
  #   # Activate the wire (default - true)
  #   root_not_gate(wire_active: false)
  #
  #   # Connect with upper gate (default - false)
  #   root_not_gate(top: true)
  #
  #   # Connect with lower gate (default - false)
  #   root_not_gate(bottom: true)
  def root_not_gate(*options)
    render 'components/gates/root_not_gate', *options
  end

  def swap_gate(*options)
    render 'components/gates/swap_gate', *options
  end

  def control_dot(*options)
    render 'components/gates/control_dot', *options
  end

  def gate_box(*options)
    render 'components/gates/gate_box', *options
  end

  def gate_circle(*options)
    render 'components/gates/gate_circle', *options
  end

  def gate_label(*options)
    render 'components/gates/gate_label', *options
  end

  # read and write

  def write(*options)
    render 'components/gates/write', *options
  end

  def readout(*options)
    render 'components/gates/readout', *options
  end
end
