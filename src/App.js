import React from 'react'

import './App.css'

function App() {
  const situations = []

  ;[true, false].forEach(k => {
    situations.push([k])
  })

  ;[true, false].forEach(k1 => {
    ;[true, false].forEach(k2 => {
      situations.push([k1, k2])
    })
  })

  ;[true, false].forEach(k1 => {
    ;[true, false].forEach(k2 => {
      ;[true, false].forEach(k3=> {
        ;[true, false].forEach(k4 => {
          situations.push([k1, k2, k3, k4])
        })
      })
    })
  })

  ;[true, false].forEach(k1 => {
    ;[true, false].forEach(k2 => {
      ;[true, false].forEach(k3=> {
        ;[true, false].forEach(k4 => {
          ;[true, false].forEach(k5 => {
            ;[true, false].forEach(k6 => {
              situations.push([k1, k2, k3, k4, k5, k6])
            })
          })
        })
      })
    })
  })

  return (
    <div className="App">
      <h1>Good and Evil visualized and explained</h1>

      {situations.map((situation, i) => (
        <ObservationCircle key={i}>
          {situation.map((good, j) => (
            <IdentityCircle key={j} good={good} />
          ))}
        </ObservationCircle>
      ))}
    </div>
  )
}

function ObservationCircle({ children }) {
  return (
    <div className={`ObservationCircle ObservationCircle-${React.Children.count(children)}`}>
      {React.Children.map(children, (child, i) => (
        <>
          {i > 0 && i % 2 === 0 && (
            <div className="arrow-horizontal">
              <div className="arrow-body-horizontal" />
              <div className="arrow-tip-right" />
            </div>
          )}
          {child}
        </>
      ))}
    </div>
  )
}

function IdentityCircle({ good  }) {
  return (
    <div className="IdentityCircle">
      {good && <div className="arrow-tip-up" />}
      <div className="arrow-body-vertical" />
      {!good && <div className="arrow-tip-down" />}
    </div>
  )
}



export default App
