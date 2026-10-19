import type {ReactNode} from 'react';

import styles from '@site/src/pages/index.module.css';

// Hand-tokenized samples: keywords, types, strings, numbers, and functions.
type Tok = {readonly children: ReactNode};
const K = ({children}: Tok) => <span className="sl-tk-k">{children}</span>;
const T = ({children}: Tok) => <span className="sl-tk-t">{children}</span>;
const S = ({children}: Tok) => <span className="sl-tk-s">{children}</span>;
const N = ({children}: Tok) => <span className="sl-tk-n">{children}</span>;
const F = ({children}: Tok) => <span className="sl-tk-f">{children}</span>;
/** Keeps a call together when a long line soft-wraps after its <wbr>. */
const Nw = ({children}: Tok) => <span className={styles.nw}>{children}</span>;

export type Lang = 'cs' | 'py' | 'ts';
/** A code line; `ind` is its leading indentation, which soft-wrapped lines hang from. */
export type CodeLine = {readonly ind?: number; readonly code?: ReactNode};
export type Sample = {readonly tab: string; readonly file: string; readonly run: string; readonly lines: readonly CodeLine[]};
/** What each step of the live session does once its line runs. */
export type Action = 'client' | 'start' | 'decl' | 'col' | 'p1' | 'p2' | 'dist' | 'out';

export const languages: readonly Lang[] = ['cs', 'py', 'ts'];

const pad = '    ';

export const samples: Record<Lang, Sample> = {
  cs: {
    tab: 'C#',
    file: 'Program.cs',
    run: 'dotnet run',
    lines: [
      {code: <><K>using</K> <T>Briosa</T>;</>},
      {},
      {code: <><K>await using var</K> briosa = <K>new</K> <T>BriosaClient</T>();</>},
      {code: <><K>await</K> briosa.<F>StartAsync</F>();</>},
      {},
      {code: <><K>var</K> collection = <K>new</K> <T>CollectionName</T> {'{'} Name = <S>"Inspection"</S> {'}'};</>},
      {code: <><K>var</K> p1 = <K>new</K> <T>PointName</T> {'{'} CollectionName = <S>"Inspection"</S>, GroupName = <S>"Points"</S>, TargetName = <S>"P1"</S> {'}'};</>},
      {code: <><K>var</K> p2 = <K>new</K> <T>PointName</T> {'{'} CollectionName = <S>"Inspection"</S>, GroupName = <S>"Points"</S>, TargetName = <S>"P2"</S> {'}'};</>},
      {},
      {code: <><K>await</K> briosa.ConstructionOperations<wbr /><Nw>.<F>ConstructCollectionAsync</F>(collection);</Nw></>},
      {code: <><K>await</K> briosa.ConstructionOperations<wbr /><Nw>.<F>ConstructPointInWorkingCoordinatesAsync</F>(p1, <K>new</K> <T>Vector</T>(<N>0</N>, <N>0</N>, <N>0</N>));</Nw></>},
      {code: <><K>await</K> briosa.ConstructionOperations<wbr /><Nw>.<F>ConstructPointInWorkingCoordinatesAsync</F>(p2, <K>new</K> <T>Vector</T>(<N>3</N>, <N>4</N>, <N>0</N>));</Nw></>},
      {},
      {code: <><K>var</K> distance = <K>await</K> briosa.<F>GetPointToPointDistanceAsync</F>(p1, p2);</>},
      {code: <><T>Console</T>.<F>WriteLine</F>(<S>$"Distance: {'{'}</S>distance.Magnitude<S>:F3{'}'}"</S>);</>},
    ],
  },
  py: {
    tab: 'Python',
    file: 'main.py',
    run: 'python main.py',
    // A complete script: CPython only allows async with inside a coroutine,
    // so the session runs in main() under asyncio.run, as in briosa-examples.
    lines: [
      {code: <><K>import</K> asyncio</>},
      {},
      {code: <><K>from</K> briosa <K>import</K> <T>BriosaClient</T>, <T>CollectionName</T>, <T>PointName</T>, <T>Vector</T></>},
      {},
      {},
      {code: <><K>async def</K> <F>main</F>():</>},
      {ind: 4, code: <>{pad}<K>async with</K> <T>BriosaClient</T>() <K>as</K> briosa:</>},
      {ind: 8, code: <>{pad}{pad}collection = <T>CollectionName</T>(name=<S>"Inspection"</S>)</>},
      {ind: 8, code: <>{pad}{pad}p1 = <T>PointName</T>(collection_name=<S>"Inspection"</S>, group_name=<S>"Points"</S>, target_name=<S>"P1"</S>)</>},
      {ind: 8, code: <>{pad}{pad}p2 = <T>PointName</T>(collection_name=<S>"Inspection"</S>, group_name=<S>"Points"</S>, target_name=<S>"P2"</S>)</>},
      {},
      {ind: 8, code: <>{pad}{pad}<K>await</K> briosa.construction_operations<wbr /><Nw>.<F>construct_collection</F>(collection)</Nw></>},
      {ind: 8, code: <>{pad}{pad}<K>await</K> briosa.construction_operations<wbr /><Nw>.<F>construct_point_in_working_coordinates</F>(p1, <T>Vector</T>(<N>0</N>, <N>0</N>, <N>0</N>))</Nw></>},
      {ind: 8, code: <>{pad}{pad}<K>await</K> briosa.construction_operations<wbr /><Nw>.<F>construct_point_in_working_coordinates</F>(p2, <T>Vector</T>(<N>3</N>, <N>4</N>, <N>0</N>))</Nw></>},
      {},
      {ind: 8, code: <>{pad}{pad}distance = <K>await</K> briosa.<F>get_point_to_point_distance</F>(p1, p2)</>},
      {ind: 8, code: <>{pad}{pad}<F>print</F>(<S>f"Distance: {'{'}</S>distance.magnitude<S>:.3f{'}'}"</S>)</>},
      {},
      {},
      {code: <>asyncio.<F>run</F>(<F>main</F>())</>},
    ],
  },
  ts: {
    tab: 'TypeScript',
    file: 'main.ts',
    run: 'node dist/main.js',
    lines: [
      {code: <><K>import</K> {'{'} <F>createBriosaClient</F>, <F>getPointToPointDistance</F> {'}'} <K>from</K> <S>'briosa'</S>;</>},
      {},
      {code: <><K>await using</K> briosa = <F>createBriosaClient</F>();</>},
      {code: <><K>await</K> briosa.<F>start</F>();</>},
      {},
      {code: <><K>const</K> collection = {'{'} name: <S>'Inspection'</S> {'}'};</>},
      {code: <><K>const</K> p1 = {'{'} collectionName: <S>'Inspection'</S>, groupName: <S>'Points'</S>, targetName: <S>'P1'</S> {'}'};</>},
      {code: <><K>const</K> p2 = {'{'} collectionName: <S>'Inspection'</S>, groupName: <S>'Points'</S>, targetName: <S>'P2'</S> {'}'};</>},
      {},
      {code: <><K>await</K> briosa.constructionOperations<wbr /><Nw>.<F>constructCollection</F>({'{'} collectionName: collection {'}'});</Nw></>},
      {code: <><K>await</K> briosa.constructionOperations<wbr />.<F>constructPointInWorkingCoordinates</F>({'{'} pointName: p1, <Nw>workingCoordinates: {'{'} x: <N>0</N>, y: <N>0</N>, z: <N>0</N> {'}'} {'}'});</Nw></>},
      {code: <><K>await</K> briosa.constructionOperations<wbr />.<F>constructPointInWorkingCoordinates</F>({'{'} pointName: p2, <Nw>workingCoordinates: {'{'} x: <N>3</N>, y: <N>4</N>, z: <N>0</N> {'}'} {'}'});</Nw></>},
      {},
      {code: <><K>const</K> distance = <K>await</K> <F>getPointToPointDistance</F>(briosa, {'{'} firstPoint: p1, secondPoint: p2 {'}'});</>},
      {code: <>console.<F>log</F>(<S>`Distance: ${'{'}</S>distance.magnitude.<F>toFixed</F>(<N>3</N>)<S>{'}'}`</S>);</>},
    ],
  },
};

/** Which 1-based lines run at each step, and what the step does in SpatialAnalyzer. */
export const steps: Record<Lang, readonly (readonly [readonly number[], Action])[]> = {
  cs: [[[3], 'client'], [[4], 'start'], [[6, 7, 8], 'decl'], [[10], 'col'], [[11], 'p1'], [[12], 'p2'], [[14], 'dist'], [[15], 'out']],
  py: [[[7], 'start'], [[8, 9, 10], 'decl'], [[12], 'col'], [[13], 'p1'], [[14], 'p2'], [[16], 'dist'], [[17], 'out']],
  ts: [[[3], 'client'], [[4], 'start'], [[6, 7, 8], 'decl'], [[10], 'col'], [[11], 'p1'], [[12], 'p2'], [[14], 'dist'], [[15], 'out']],
};
