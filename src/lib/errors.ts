// Deliberate type errors, to test the Code Quality report

export const count: number = 'one'

const user: { name: string } = { name: 'Ada' }

// Two identical errors in one file: their fingerprints must still differ
export const first = user.age
export const second = user.age
