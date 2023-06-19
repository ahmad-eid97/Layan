import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RelatedUniversities, UniversityDetails, UniversityHead, UniversityInfo } from '../../components';
import PageLoader from '../../components/UIs/PagesLoader/PagesLoader'

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './university.module.scss';

const University = () => {
  // COMPONENT HOOKS
  const [university, setUniversity] = useState({});
  const [degrees, setDegrees] = useState([]);
  const [relatedUniversities, setRelatedUniversities] = useState([]);
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  // COMPONENT HOANDLERS
  const fetchUniversityData = async () => {
    setLoading(true)
    const response = await axios.get(`/crm/universities/${id}?lang=${i18n.language}`);
    if (!response) return;
    setUniversity(response.data.data.university);
    setDegrees(response.data.data.degrees)
    setLoading(false)
  }

  const fetchRelatedUniversities = async () => {
    const response = await axios.get(`/crm/universities?lang=${i18n.language}&limit=10`);
    if (!response) return;
    setRelatedUniversities(response.data.data.universities);
  }

  useEffect(() => {
    fetchUniversityData();
    fetchRelatedUniversities();
  }, [id])

  return (
    <div className={cls.university}>
      {loading && <PageLoader />}
      <UniversityHead university={university} />
      <UniversityInfo university={university} />
      <UniversityDetails degrees={degrees} />
      <RelatedUniversities relatedUniversities={relatedUniversities} />
    </div>
  )
}

export default University