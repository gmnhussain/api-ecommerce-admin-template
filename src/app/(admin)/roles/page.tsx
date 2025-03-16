// import { checkPermission } from '@/lib/permissions';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { RolesList } from '@/components/modules/roles/roles-list';

export default async function RolesPage() {
  // await checkPermission('roles:view');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Roles & Permissions</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>

      <RolesList />
    </div>
  );
}
