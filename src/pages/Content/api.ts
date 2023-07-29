import { request } from '@umijs/max';
import { ContentListItem } from './types';

export async function listContent(params: {
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<ContentListItem[]>('/contents', {
    method: 'GET',
    params,
  });
}

export async function updateContent(params: ContentListItem) {
  return request(`/contents/${params.id}`, {
    method: 'PUT',
    data: params,
  });
}

export async function addContent(params: Partial<ContentListItem>) {
  return request('/contents', {
    method: 'POST',
    data: params,
  });
}

export async function deleteContent(params: Pick<ContentListItem, 'id'>) {
  return request(`/contents/${params.id}`, {
    method: 'DELETE',
  });
}
