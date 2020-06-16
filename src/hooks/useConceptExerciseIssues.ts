import { useEffect, useState } from 'react'

export interface ConceptExerciseIssue {
  number: number
  title: string
  body: string
  url: string
  updatedAt: string
}

export type ConceptExerciseIssueResult<T> = {
  result: T | undefined
  error: boolean
  done: boolean
}

function useConceptExerciseIssuesApi<T>(
  url: string
): ConceptExerciseIssueResult<T> {
  const [state, setState] = useState<ConceptExerciseIssueResult<T>>({
    result: undefined,
    error: false,
    done: false,
  })

  useEffect(() => {
    if (state.done === true) {
      return
    }

    let requestIsStale = false

    fetch(url, { headers: { accept: 'application/json' } })
      .then((response) => response.json())
      .then((json) => {
        if (!requestIsStale) {
          setState({
            result: json as T,
            done: true,
            error: false,
          })
        }
      })
      .catch(() => {
        if (!requestIsStale) {
          setState({ result: undefined, done: true, error: true })
        }
      })

    return () => {
      requestIsStale = true
    }
  }, [url, state])

  return state
}

export function useCreationConceptExerciseIssues(
  trackId: TrackIdentifier
): ConceptExerciseIssueResult<ConceptExerciseIssue[]> {
  return useConceptExerciseIssuesApi(
    `https://exercism.io/git_api/tracks/${trackId}/open_creation_issues`
  )
}

export function useCreationConceptExerciseIssuesCount(
  trackId: TrackIdentifier
): ConceptExerciseIssueResult<number> {
  return useConceptExerciseIssuesApi(
    `https://exercism.io/git_api/tracks/${trackId}/num_creation_issues`
  )
}

export function useImproveConceptExerciseIssues(
  trackId: TrackIdentifier
): ConceptExerciseIssueResult<ConceptExerciseIssue[]> {
  return useConceptExerciseIssuesApi(
    `https://exercism.io/git_api/tracks/${trackId}/open_improve_issues`
  )
}
