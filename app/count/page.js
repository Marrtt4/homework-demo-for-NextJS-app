import Counter from '@/components/Counter';

export default function CountPage() {
  return (
    <main>
      <h1>Counters</h1>
      <Counter step={1} color="green" />
      <Counter step={2} color="crimson" />
    </main>
  );
}