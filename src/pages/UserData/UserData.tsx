import React, { useState } from 'react';
import styled from 'styled-components';
import { FormikConfig, useFormik } from 'formik';
import { Input } from '../../components/Input';
import { logger } from '../../utils/logger';
import { Button } from '../../components/Button';
import plusIcon from '../../assets/img/Union.svg';
import { UserDataEntity, UserDataSchema } from '../../types/userData';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/app';
import { getPathByName } from '../../router';
import { Title, Element } from '../../GlobalStyles';
import { getChildrenMaxId } from './helpers';

const DEFAULT_INITIAL_VALUES: UserDataEntity = {
  name: '',
  age: 0,
  children: [],
};

const MAX_CHILD = 5;

export const UserData: React.FC = () => {
  const userData = useAppSelector(appSelectors.getUserData);

  const [initialValues, setInitialValues] = useState<UserDataEntity>(
    userData ? userData : DEFAULT_INITIAL_VALUES,
  );

  const dispatch = useAppDispatch();

  const formikConfig: FormikConfig<UserDataEntity> = {
    initialValues,
    onSubmit: (values) => {
      logger('UserData values:', values);
      dispatch(appActions.setUserData(values));
      const path = getPathByName('profile');
      dispatch(appActions.redirect(path));
    },
    validationSchema: UserDataSchema,
    enableReinitialize: true,
  };

  const formik = useFormik(formikConfig);

  const handleAddChild = () => {
    const children = formik.values.children;
    if (children) {
      const currentChildrenMaxId = getChildrenMaxId(children);

      setInitialValues({
        ...formik.values,
        children: [
          ...formik.values.children,
          { id: currentChildrenMaxId + 1, age: 0, name: '' },
        ],
      });
    }
  };

  const handleDeleteChild = (id: number) => () => {
    setInitialValues({
      ...formik.values,
      children: [...formik.values.children.filter((child) => child.id !== id)],
    });
  };

  return (
    <Wrap>
      <Form noValidate onSubmit={formik.handleSubmit} autoComplete={'off'}>
        <Element mt={0}>
          <Title>Персональные данные</Title>
        </Element>
        <Element mt={10}>
          <Input
            label={'Имя'}
            placeholder={'Введите ваше имя'}
            type={'text'}
            {...formik.getFieldProps('name')}
            error={formik.errors.name}
            showError={
              Boolean(formik.touched.name) && Boolean(formik.errors.name)
            }
          />
        </Element>
        <Element mt={10}>
          <Input
            label={'Возраст'}
            placeholder={'Введите ваш возраст'}
            type={'number'}
            {...formik.getFieldProps('age')}
            error={formik.errors.age}
            showError={
              Boolean(formik.touched.age) && Boolean(formik.errors.age)
            }
          />
        </Element>
        <Element mt={33}>
          <ChildHeader>
            <Title>Дети (макс. 5)</Title>
            {formik.values.children.length < MAX_CHILD ? (
              <Button
                type={'button'}
                width={204}
                caption="Добавить ребенка"
                disabled={false}
                onClick={handleAddChild}
                isFilled={false}
                icon={plusIcon}
              />
            ) : null}
          </ChildHeader>
        </Element>
        <Element mt={10}>
          {formik.values.children
            ? formik.values.children.map((child, index) => {
                let childNameError = '';
                let childNameTouched = false;
                let childAgeError = '';
                let childAgeTouch = false;

                if (Array.isArray(formik.errors.children)) {
                  const childError = formik.errors.children[index];
                  if (typeof childError === 'object') {
                    childNameError = childError?.name || '';
                    childAgeError = childError?.age || '';
                  }
                }

                if (Array.isArray(formik.touched.children)) {
                  const childTouched = formik.touched.children[index];
                  childNameTouched = Boolean(childTouched?.name);
                  childAgeTouch = Boolean(childTouched?.age);
                }

                return (
                  <Element mt={10} key={child.id}>
                    <ChildWrap>
                      <Input
                        label={'Имя'}
                        placeholder={'Введите имя ребенка'}
                        type={'text'}
                        {...formik.getFieldProps(`children[${index}].name`)}
                        error={childNameError}
                        showError={childNameTouched && Boolean(childNameError)}
                      />
                      <Input
                        label={'Возраст'}
                        placeholder={'Введите возраст ребенка'}
                        type={'number'}
                        {...formik.getFieldProps(`children[${index}].age`)}
                        error={childAgeError}
                        showError={childAgeTouch && Boolean(childAgeError)}
                      />
                      <ChildDeleteButton onClick={handleDeleteChild(child.id)}>
                        Удалить
                      </ChildDeleteButton>
                    </ChildWrap>
                  </Element>
                );
              })
            : null}
        </Element>
        <Element mt={20}>
          <Button
            type={'submit'}
            disabled={false}
            caption={'Сохранить'}
            width={118}
            isFilled={true}
          />
        </Element>
      </Form>
    </Wrap>
  );
};

const ChildHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChildDeleteButton = styled.a`
  line-height: 56px;
  cursor: pointer;
  color: #01a7fd;
`;

const ChildWrap = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const Wrap = styled.div`
  padding: 30px;
`;

const Form = styled.form`
  width: 100%;
`;
