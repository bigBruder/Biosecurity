import { ImageWidgets } from '@/shared/ui/ImageWidgets';
import { Title2 } from '@/shared/ui/Title';

import { About } from './ui/About';
import { BiosecurityIs } from './ui/BiosecurityIs';
import { Hero } from './ui/Hero';
import { HomeLayout } from './ui/HomeLayout';
import { MultiSection } from './ui/MultiSection/MultiSection';
import { content } from './ui/MultiSection/model/content';
import { List } from './ui/MultiSection/ui/List';
import { Slider } from './ui/Slider';

export default function Home() {
  return (
    <HomeLayout
      hero={<Hero />}
      biosecurityIs={<BiosecurityIs />}
      slider={<Slider />}
      producer={
        <MultiSection
          title={<Title2>Producer</Title2>}
          text={content.producer.text}
          list={<List items={content.producer.list} />}
          imageWidget={<ImageWidgets urls={content.producer.pictures} />}
        />
      }
      veterinarian={
        <MultiSection
          title={<Title2>Veterinarian</Title2>}
          text={content.veterinarian.text}
          isReverse={true}
          list={<List items={content.veterinarian.list} />}
          imageWidget={<ImageWidgets urls={content.veterinarian.pictures} plantColor />}
        />
      }
      serviceProvider={
        <MultiSection
          title={<Title2>Service provider</Title2>}
          text={content.serviceProvider.text}
          list={<List items={content.serviceProvider.list} />}
          imageWidget={<ImageWidgets urls={content.serviceProvider.pictures} />}
        />
      }
      aboutUs={<About />}
    />
  );
}
