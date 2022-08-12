import type { HTMLAttributes } from 'react'

export type NativeAttributes<T> = Omit<HTMLAttributes<unknown>, keyof T>
