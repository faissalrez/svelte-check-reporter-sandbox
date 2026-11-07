// Deliberate type errors, to test the Code Quality report

// Lines added above the errors, to check that code scanning doesn't report them as new
export const unrelated = 1

export const count: number = 'one'

const user: { name: string } = { name: 'Ada' }

// Two identical errors in one file: their fingerprints must still differ
export const first = user.age
export const second = user.age
