export function create({ track, shared }) {
  return shared.toneAdapter.createInstrument({ track });
}
