import { FormArea } from './ui/Form';
import { Heading } from './ui/Heading';
import { Layout } from './ui/Layout';

const Hero = () => {
  return <Layout heading={<Heading />} form={<FormArea />} />;
};

export { Hero };
