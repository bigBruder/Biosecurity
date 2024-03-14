import { FormSide } from './ui/FormSide';
import { Heading } from './ui/Heading';
import { Layout } from './ui/Layout';

export default function RequestCall() {
  return <Layout heading={<Heading />} form={<FormSide />} />;
}
