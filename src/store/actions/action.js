export default function counter(payload) {
  return {
    type: 'counter/incremented',
    payload: payload
  }
}
