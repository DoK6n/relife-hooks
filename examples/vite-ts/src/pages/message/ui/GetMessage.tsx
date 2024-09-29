import { Suspense } from 'react'
import { use } from 'relife-hooks'
import { Post } from '../../../lib/model'
import { styler } from '../../../lib/utils'

function CachedMessageContent({ promise }: { promise: Promise<Post> }) {
  const message = use(promise)
  return (
    <div>
      <div style={styles.tags}>
        {message.tags.map(tag => (
          <span key={tag} style={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
      <div style={styles.content}>
        <p>{message.body}</p>
      </div>
    </div>
  )
}

function Message({ promise }: { promise: Promise<Post> }) {
  const message = use(promise)
  return (
    <>
      <h2>{message.title}</h2>
      <CachedMessageContent promise={promise} />
    </>
  )
}

export default function GetMessage({ promise }: { promise: Promise<Post> }) {
  return (
    <div style={styles.message}>
      <Suspense fallback={<p>⌛ get message...</p>}>
        <Message promise={promise} />
      </Suspense>
    </div>
  )
}

const styles = styler({
  message: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
  },
  tags: {
    display: 'flex',
    gap: '4px',
    fontSize: '12px',
  },
  tag: {
    backgroundColor: '#f0f0f0',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  content: {
    marginTop: '16px',
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#333',
    fontFamily: 'sans-serif',
    fontWeight: '400',
    letterSpacing: '0.01em',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    textAlign: 'left',
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
    textShadow: 'none',
    textTransform: 'none',
    userSelect: 'text',
    verticalAlign: 'baseline',
    wordSpacing: '0px',
  },
})
